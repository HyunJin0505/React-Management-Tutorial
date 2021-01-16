import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
//Table에 CSS적용을 위해서 Paper, withStyles 라이브버리 import
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles=theme=>({
  root:{
    width:"100%",
    marginTop:theme.spacing.unit*3,
    overFlowX:"auto"   //테이블 크기 축소x 가로스크롤로 지정
  },
  table:{
    minWidth:1080   //테이블의 크기는 최소 1080px
  }
})


const customers = [{
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '추상우',
    'birthday': '961222',
    'gender': '남자',
    'job': '개발자'
    },
    {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '장재영',
    'birthday': '941029',
    'gender': '남자',
    'job': '디자이너'
    },
    {
      'id': 3,
      'image': 'https://placeimg.com/64/64/3',
      'name': '무정후',
      'birthday': '990527',
      'gender': '남자',
      'job': '이사님ㅎ'
      }
]

class App extends Component {
  render() {
    const{classes}=this.props;
  return (
    // withStyles를 사용하려면 <Papers>태그로 JSX요소들을 감싸준다
  <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>번호</TableCell>
          <TableCell>이미지</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>생년월일</TableCell>
          <TableCell>성별</TableCell>
          <TableCell>직업</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {customers.map(c => {
        return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
        })}
      </TableBody>
    </Table>
  </Paper>
  );
  }
  }

export default withStyles(styles)(App);

