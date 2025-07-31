import { createRealmContext } from "@realm/react";
import { realmConfig } from "./realm";

const { RealmProvider, useRealm, useQuery, useObject } =
  createRealmContext(realmConfig);

export { RealmProvider, useObject, useQuery, useRealm };
