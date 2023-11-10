// src/studentSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

initialState = {
  students:[],
  loading:false,
  error:null
}

export const postStudent = createAsyncThunk("localhost:3334/students", async(studentData)=>{
  try {
    const response = await axios.post("http://localhost:3334/students",studentData)
    return response
  } catch (error) {
    throw error.response.data;
  }
})

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(postStudent.pending,(state)=>{
      state.loading = true,
      state.error = null
    })
    .addcase(postStudent.fulfilled,(state,action)=>{
      state.loading = false,
      state.students.push(action.payload)
    })
    .addCase(postStudent.rejected,(state,action)=>{
      state.loading = false,
      state.error = action.error.message;
    })
  }    
});

export const { addStudent, editStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;
