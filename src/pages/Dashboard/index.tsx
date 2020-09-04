import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositories on Github</Title>

      <Form>
        <input placeholder="Type the repository name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/67848049?s=460&u=a87c5c1a51f39c2b989480dc173550bdfa692619&v=4"
            alt="Jonathan"
          />
          <div>
            <strong>gostack-nodejs-typeorm-db-challenge</strong>
            <p>
              Gostack challenge - Using typescript, typeorm, database (postgres
              running on docker) and file upload.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/67848049?s=460&u=a87c5c1a51f39c2b989480dc173550bdfa692619&v=4"
            alt="Jonathan"
          />
          <div>
            <strong>gostack-nodejs-typeorm-db-challenge</strong>
            <p>
              Gostack challenge - Using typescript, typeorm, database (postgres
              running on docker) and file upload.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/67848049?s=460&u=a87c5c1a51f39c2b989480dc173550bdfa692619&v=4"
            alt="Jonathan"
          />
          <div>
            <strong>gostack-nodejs-typeorm-db-challenge</strong>
            <p>
              Gostack challenge - Using typescript, typeorm, database (postgres
              running on docker) and file upload.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
