import  { Fragment, useEffect, useState } from "react";
import UseFetch from "../hooks/UseFetch";
import './categories.css';
import Checkbox from "./Checkbox";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const { data, loading, error } = UseFetch("/categories?populate=*");

  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);

  return (
    <>
      <div className='categories'>
        {loading ? (
          "Loading..."
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          categories.map(category => (
            <Fragment key={category.id}>
              <Checkbox category={category} />
            </Fragment>
          ))
        )}
      </div>
    </>
  );
}
