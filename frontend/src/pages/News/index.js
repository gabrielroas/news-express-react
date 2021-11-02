import React, { Fragment } from "react";

const News = (props) => {
  return (
    <Fragment>
      <h1 className="f1">Titulo: {props.match.params.news_url}</h1>
    </Fragment>
  );
};

export default News;