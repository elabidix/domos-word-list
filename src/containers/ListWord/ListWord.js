import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchWords } from "store/actions";
import { List } from "antd";

const ListWord = ({ fetchData, data, isLoading, isError }) => {
  useEffect(() => {
    fetchData();
  }, []);

  if (isError) return <div> error while fetching words</div>;

  return (
    <List
      size="small"
      header={<div>List Words </div>}
      loading={isLoading}
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  );
};

ListWord.defaultProps = {
  data: [],
};

const mapStateToProps = (state) => ({
  ...state.fetch,
});

export default connect(mapStateToProps, { fetchData: fetchWords })(ListWord);
