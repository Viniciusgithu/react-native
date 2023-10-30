import styled from "styled-components/native";

export const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color:black;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  width: 70%;
`;

export const HeaderText = styled.Text`
  font-size: 25px;
  color: #fff;
  margin-top: 5%;
`;


export const ResultArea = styled.View`
  margin-top: 20px;
  background-color: #CCCCFF;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const ResultItem = styled.Text`
font-size: 18px;
color: black
`;