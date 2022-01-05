import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addWord } from "store/actions";

const WordForm = ({ addWord, isLoading, isError, isSuccess, errorMessage }) => {
  const [form] = Form.useForm();

  const onFinish = ({ word }) => addWord(word);

  useEffect(() => {
    if (isError) {
      form.setFields([{ name: "word", errors: [errorMessage] }]);
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) form.resetFields();
  }, [isSuccess]);

  return (
    <Form form={form} name="basic" onFinish={onFinish} autoComplete="off">
      <Form.Item
        label="Word"
        name="word"
        rules={[{ required: true, message: "Please input your word" }]}
      >
        <Input />
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={isLoading}>
        Add
      </Button>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  ...state.create,
});

export default connect(mapStateToProps, { addWord })(WordForm);
