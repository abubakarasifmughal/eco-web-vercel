"use client"; // <-- IGNORE FOR NOW THIS IS ONYL REDUX TEST
import { useFetchSiteQuery } from "@/redux/apis/builder.api";
// TEST REDUX PAGE
import { RootState } from "@/redux/store";
import React, { FC } from "react";
import { connect } from "react-redux";

const Index: FC<RootState> = ({ appState }) => {
  const { data, error } = useFetchSiteQuery({ siteId: "abc" });

  return (
    <div>
      page
      <div>{JSON.stringify(appState)}</div>
      <div>{JSON.stringify(error)}</div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default connect((state: RootState) => state)(Index);
