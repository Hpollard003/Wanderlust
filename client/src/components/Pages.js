import React, { useState, useEffect } from "react";
import PageCards from "./PageCards";
import { useParams } from "react-router-dom"

const Pages = () => {
    const [pages, setPages] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch(`/journals/${id}`)
          .then((resp) => resp.json())
          .then((data) => {
            setPages(data.pages);
            console.log(pages);
          });
      }, [id]);


    return (
        <PageCards pages={pages} setPages={setPages} />
    )
}

export default Pages
