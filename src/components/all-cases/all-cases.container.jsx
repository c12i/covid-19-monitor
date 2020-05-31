import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import AllCases from "./all-cases.component";
import LoaderComponent from "../loader/loader.component";

const GET_ALL_CASES = gql`
  query {
    worldwideStats {
      cases
      deaths
      recovered
      updated
    }
  }
`;

const AllCasesContainer = () => {
  const { data, loading } = useQuery(GET_ALL_CASES);

  return <>{loading ? <LoaderComponent /> : <AllCases all={data.worldwideStats} />}</>;
};

export default AllCasesContainer;
