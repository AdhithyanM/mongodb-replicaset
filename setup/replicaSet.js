rsconf = {
  _id: "rs0",
  members: [
    { _id: 0, host: "mdbrs0p:2717" },
    { _id: 1, host: "mdbrs0s1:2727" },
    { _id: 2, host: "mdbrs0s2:2737" },
  ],
};

rs.initiate(rsconf);

rs.conf();

console.log(rs.status());
