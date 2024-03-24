rsconf = {
  _id: "rs0",
  members: [
    { _id: 0, host: "mongo_primary:27017" },
    { _id: 1, host: "mongo_secondary-1:27017" },
    { _id: 2, host: "mongo_secondary-2:27017" },
  ],
};

rs.initiate(rsconf);

rs.conf();
