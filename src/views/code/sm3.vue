<script setup>
import { reactive } from 'vue';
import {sm3} from 'sm-crypto';

const data = reactive({
    value:'',
    result:''
})

const sm3Handler = ()=>{
    data.result = sm3(data.value);
}

</script>

<template>
    <h2>SM3</h2>
    <el-divider></el-divider>
    <el-form label-position="top">
        <el-form-item label="待处理值">
            <el-input v-model="data.value" type="textarea" :rows="7" placeholder="待处理字符串"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="sm3Handler" style="width:100px;height:35px;">启动</el-button>
        </el-form-item>
    </el-form>
    <el-form-item label="计算结果" style="display:inline-block;" v-if="data.result">
        <el-row style="width:100%;margin-top:5px;"><el-tag type="success">SM3</el-tag>&nbsp;<el-tag type="success">Base32</el-tag></el-row>
        <el-row style="width:100%;margin-top:10px;">
            <el-input type="textarea" v-model="data.result" :rows="7" :readonly="true" style="width:400px;"></el-input>
        </el-row>
    </el-form-item>
</template>

<style scoped>
</style>