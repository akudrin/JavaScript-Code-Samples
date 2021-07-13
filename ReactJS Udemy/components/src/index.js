import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Sam'
          timeAgo='Today at 4:45PM'
          content='Nice blog post'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Alice'
          timeAgo='Today at 2:45PM'
          content='I like the subject'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='John'
          timeAgo='Yesterday at 10:45PM'
          content='Very good article'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
