"use client";
import React from "react";
import { useState } from "react";
import SearchManufacturer from "../SearchManufacturer/SearchManufacturer";
import { manufacturers } from "../../constants/index";
import SearchButton from "./SearchButton";
import Image from "next/image";
// import { useRouter } from "next/navigation";

const SearchBar = ({ setManufacturer, setModel }) => {
  const [searchManufacturers, setSearchManufacturers] = useState("");
  const [searchModel, setSearchModel] = useState("");
  // const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchManufacturers === "" && searchModel === "") {
      return alert("Please fill in the search bar");
    }

    setModel(searchModel);
    setManufacturer(searchManufacturers);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturers}
          setSelected={setSearchManufacturers}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          alt="car model"
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
