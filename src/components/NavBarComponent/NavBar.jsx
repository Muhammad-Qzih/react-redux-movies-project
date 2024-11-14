import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logoPath from "../../images/logo100-removebg-preview.png";
import { useDispatch } from "react-redux";

import { getAllMovies, getMoviesBySearch } from "../../redux/actions/moviesActions";
import { Logo, NavStyle, Search, SearchIcon, SearchInput } from "./NavBatStyles";

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const searchMovies = (word) => {
    if (word === "") {
      dispatch(getAllMovies());
    } else {
      dispatch(getMoviesBySearch(word));
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchMovies(searchTerm);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const onSearch = (searchInput) => {
    setSearchTerm(searchInput);
  };

  return (
    <NavStyle>
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            <Logo src={logoPath} alt="logo" />
          </Col>
          <Col xs="10" lg="11" className="d-flex align-items-center">
            <Search>
              <SearchIcon className="fa fa-search" />
              <SearchInput
                onChange={(e) => onSearch(e.target.value)}
                type="text"
                placeholder="البحث"
              />
            </Search>
          </Col>
        </Row>
      </Container>
    </NavStyle>
  );
};

export default NavBar;
