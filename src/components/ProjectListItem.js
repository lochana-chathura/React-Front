import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {removeProject} from '../actions/projects';
import moment from 'moment';
import { Button } from 'semantic-ui-react';


const ProjectListItem = ({dispatch,id,name, description,cost,note,createdAt }) => (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>{cost}</td>
      <td>{note}</td>
      <td>{moment(createdAt).format("DD MMM YYYY hh:mm a")}</td>
      <td>
      <div className="a">
        <Button className="edit-button"><Link to={`/edit/${id}`}>EDIT</Link></Button>
        <Button secondary className="remove-button" 
        onClick={()=>{
          dispatch(removeProject({id}));
        }}
        >REMOVE</Button>
      </div>
      </td>
    </tr>
);

export default connect()(ProjectListItem);
