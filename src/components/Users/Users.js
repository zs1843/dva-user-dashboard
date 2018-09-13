import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button } from 'antd';
import styles from './Users.less';
import { PAGE_SIZE } from '../../constants';
import Layout from './../../components/Layout/Layout';
import UserModal from '../UserModal/UserModal';

function Users({ list: dataSource, loading, total, page: current, location, dispatch }) {

  function deleteHandler(id) {
    dispatch({
      type: 'users/remove',
      payload: id,
    });
  }

  const onPageChange = (page) => {
    dispatch({
      type: 'users/fetch',
      payload: {
        page,
      }
    })
  }

  const createHandler = (values) => {
    console.log(values);
    dispatch({
      type: 'users/create',
      payload: values,
    })
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="">{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (text, { id }) => (
        <span className={styles.operation}>
          <a href=""><Button>Edit</Button></a>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, id)}>
            <a href=""><Button>Delete</Button></a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <Layout location={location}>
      <div className={styles.normal}>
        <UserModal record={{ name: '', email: '', website: '' }} onOk={createHandler}>
          <Button type="primary">Create User</Button>
        </UserModal>
        <div>
          <Table
            columns={columns}
            dataSource={dataSource}
            rowKey={record => record.id}
            pagination={false}
            loading={loading}
          />
          <Pagination
            className="ant-table-pagination"
            total={total}
            current={current}
            pageSize={PAGE_SIZE}
            onChange={onPageChange}
          />
        </div>
      </div>
    </Layout>
  );
}

function mapStateToProps(state) {
  const { list, total, page } = state.users;
  return {
    loading: state.loading.models.users,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(Users);