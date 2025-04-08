import { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { Routes, Route, data } from "react-router";
import About from "./pages/About";
import Home from "./pages/Home";
import AboutCompany from "./pages/AboutCompany";
import AboutPeople from "./pages/AboutPeople";
import Error from "./pages/Error";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchValue , setSearchValue] = useState("");
  const [loading, setloading] = useState(false);
  const [slectedCategory, setSelectedCat] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 4;

  useEffect(() => {
    setloading(true);
    // fetch("http://localhost:3000/menu?_delay=4000")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setItems(data);
    //     setloading(false);
    //   })
    //   .catch((error) => console.error("Error fetching data:", error));
    const getDate = async () => {
      const { data } = await axios.get(
        "http://localhost:3000/menu?_delay=3000"
      );
      const { data: categoriesData } = await axios.get(
        "http://localhost:3000/categorys"
      );
      setCategories([{ id: 0, name: "All" }, ...categoriesData]);
      setItems(data);
      setloading(false);
    };

    getDate();
  }, []);
  const handelReset = () => {
    //clone and edit
    const newitems = items.map((itm) => ({ ...itm, count: 0 }));
    // setitems
    setItems(newitems);
    newitems;
  };

  const handelincrement = (id, val) => {
    //clone
    const newitems = [...items];
    const index = newitems.findIndex((itm) => itm.id === id);
    console.log(newitems[index].count);
    //edit
    newitems[index] = {
      ...newitems[index],
      count: newitems[index].count + val,
    };
    //setitems
    setItems(newitems);
  };
  const handeldelete = (id) => {
    //edit
    let newitems = items.filter((itm) => itm.id !== id);
    //setitems
    setItems(newitems);
  };
  const handelAddToCart = (id) => {
    //clone & edit
    const newitems = items.map((itm) => ({
      ...itm,
      clicked: itm.id === id ? !itm.clicked : itm.clicked,
    }));
    //setitems
    setItems(newitems);
  };

  const handleSelectCat = (id) => {
    setSelectedCat(id);

    setCurrentPage(1);
  };

  const handelSaersh = (e) => {
  
      const searchValuInput = e.target.value.toLowerCase();
     setSearchValue(searchValuInput)
    setCurrentPage(1);
  };

  const handleCurrentPage = (page) => setCurrentPage(page);

  const handlefilter = () => {
    let filtered = items;
  
    if (searchValue.trim() !== "") {
      filtered = filtered.filter((itm) =>
        itm.name.toLowerCase().includes(searchValue)
      );
    }
  
    if (slectedCategory !== 0) {
      filtered = filtered.filter((itm) => +itm.category === slectedCategory);
    }
  
    setFilteredItems(filtered);
  };

  useEffect(() => {
    handlefilter();
  }, [searchValue, slectedCategory, items]);
  //filter Items
  // let filterItems =
  //   slectedCategory === 0
  //     ? items
  //     : items.filter((itm) => +itm.category === slectedCategory);
  //pagination
  const noOfPage = Math.ceil(filteredItems.length / pageSize);
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const paginatedItems = filteredItems.slice(start, end);

  return (
    <>
      <Navbar
        nomOfItims={items.reduce((Sum, itm) => itm.count + Sum, 0)}
        hasClickedItems={items.some((itm) => itm.clicked === true)}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={paginatedItems}
              handelAddToCart={handelAddToCart}
              loading={loading}
              categories={categories}
              slectedCategory={slectedCategory}
              handleSelectCat={handleSelectCat}
              noOfPage={noOfPage}
              currentPage={currentPage}
              handleCurrentPage={handleCurrentPage}
              handelSaersh={handelSaersh}
            />
          }
        />
        {/* <Route path="/menu" element={<Menu items={items}/>} /> */}
        <Route
          path="/Cart"
          element={
            <Card
              items={items.filter((itm) => itm.clicked)}
              handelincrement={handelincrement}
              handeldelete={handeldelete}
              handelReset={handelReset}
            />
          }
        />
        <Route path="/About" element={<About />}>
          <Route path="company" element={<AboutCompany />} />
          <Route path="people" element={<AboutPeople />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
