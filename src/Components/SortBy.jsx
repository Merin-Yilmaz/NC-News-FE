import { useEffect, useState } from "react";

const SortBy = () => {
  const sortingOptions = {
    created_at: "Date",
    comment_count: "Comments",
    votes: "Votes",
  };
  const orderOptions = ["asc", "desc"];
  const searchParams = new URLSearchParams(location.search);
  const orderFromQuery = searchParams.get("order") || "asc";
  const sortFromQuery = searchParams.get("sort") || "created_at";
  const [sort, setSort] = useState(sortFromQuery);
  const [order, setOrder] = useState(orderFromQuery);

  useEffect(() => {
    if (sort !== sortFromQuery || order !== orderFromQuery) {
      if(searchParams.length) {
        window.location =
        "/?" +
        new URLSearchParams({ sort: sort }).toString() +
        "&" +
        new URLSearchParams({ order: order }).toString();
      } else {
        window.location =
        location.search +
        "&" +
        new URLSearchParams({ sort: sort }).toString() +
        "&" +
        new URLSearchParams({ order: order }).toString();
      }
      
    }
    console.log(sort);
  }, [sort, order]);

  return (
    <>
      <div className="sort-container">
        <h6>Sort By:</h6>
        <select
          onChange={(event) => setSort(event.target.value)}
          value={sortFromQuery}
        >
          {Object.entries(sortingOptions).map(([key, sort]) => (
            <option key={key} value={key}>
              {sort}
            </option>
          ))}
        </select>
        <h6>Order By:</h6>
        <select
          onChange={(event) => setOrder(event.target.value)}
          value={orderFromQuery}
        >
          {orderOptions.map((order) => (
            <option key={order} value={order}>
              {order}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SortBy;
