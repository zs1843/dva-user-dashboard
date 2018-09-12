import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button } from 'antd';
import styles from './Users.less';
import { PAGE_SIZE } from '../../constants';
import Layout from './../../components/Layout/Layout';

function Users({ list: dataSource, total, page: current, location }) {
  function deleteHandler(id) {
    console.warn(`TODO: ${id}`);
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
        <div>
          <Table
            columns={columns}
            dataSource={dataSource}
            rowKey={record => record.id}
            pagination={false}
          />
          <Pagination
            className="ant-table-pagination"
            total={total}
            current={current}
            pageSize={PAGE_SIZE}
          />
        </div>
      </div>
    </Layout>
  );
}

function mapStateToProps(state) {
  const { list, total, page } = state.users;
  return {
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(Users);