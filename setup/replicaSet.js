rsconf = {
  _id: "rs0",
  members: [
    { _id: 0, host: "mongo_primary:2717" },
    { _id: 1, host: "mongo_secondary-1:2727" },
    { _id: 2, host: "mongo_secondary-2:2737" },
  ],
};

rs.initiate(rsconf);

rs.conf();
