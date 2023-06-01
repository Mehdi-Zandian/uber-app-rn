import React, { useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useDispatch } from "react-redux"; // redux
import { setOrigin, setDestination } from "../../store/slices/navSlice"; // redux
import useFetchAPI from "../../hooks/useFetchAPI";
import AddressItems from "./AddressItems";
import AddressInput from "./AddressInput";

const AddressAutocomplete = ({ placeHolderText, target }) => {
  const dispatch = useDispatch();
  const [showList, setShowList] = useState(false);

  // TextInput handlers
  const [searchText, setSearchText] = useState("");
  const onRemoveAddressHandler = () => {
    setSearchText("");
    dispatch(target === "origin" ? setOrigin(null) : setDestination(null));
  };
  const onChangeAddressHandler = (text) => {
    setSearchText(text);
    showList === false && setShowList(true);
  };

  // fetch data for autocomplete places
  const { data, loading, error } = useFetchAPI(
    "/geocode/autocomplete?",
    searchText !== "" ? `text=${searchText}&` : "empty"
  );

  // Place items select handlers
  const onSelectItemsHandler = (item) => {
    // update text input
    setSearchText(item?.formatted || item?.properties?.formatted);

    // close the list after click
    setShowList(false);

    // send origin to the store
    const data = {
      location: item?.geometry?.coordinates,
      description: item?.formatted || item?.properties?.formatted,
    };
    dispatch(target === "origin" ? setOrigin(data) : setDestination(data));

    // clear the destination from store
    target === "origin" && dispatch(setDestination(null));
  };

  return (
    <View className="mb-3">
      <AddressInput
        enterdText={searchText}
        placeHolderText={placeHolderText}
        onChangeAddressHandler={onChangeAddressHandler}
        onRemoveAddressHandler={onRemoveAddressHandler}
      />

      {loading && (
        <ActivityIndicator className="my-3" size="small" color="#333" />
      )}

      {error && <Text>Error Fetching Data: {error}</Text>}

      {(data?.results || data?.features) && (
        <View
          className={`${(!showList || searchText.length === 0) && "hidden"}`}
        >
          <AddressItems
            items={data?.results || data?.features || []}
            onSelectItemsHandler={onSelectItemsHandler}
          />
        </View>
      )}
    </View>
  );
};

export default AddressAutocomplete;
