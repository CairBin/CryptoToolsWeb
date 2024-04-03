<script setup>
import { reactive } from 'vue';
import crypto from 'crypto-js';
import base32 from 'base32-encode';
import {Buffer} from 'buffer';
import { ElMessage } from 'element-plus';
import base32Decode from 'base32-decode'

const codeRule = {

}

const data = reactive({
    hex:{
        code:'encode',
        value:'',
        result:''
    },
    base32:{
        rule:'RFC4648',
        code:'encode',
        value:'',
        result:''
    },
    base64:{
        code:'encode',
        value:'',
        result:''
    }
})


const hexHandler = ()=>{
    data.hex.result = ''
    var val = data.hex.value
    if(!val){
        ElMessage({
            type:'error',
            message:'待处理值不能为空(Hex)'
        })
        return;
    }

    try {
        if(data.hex.code === 'encode'){
            var buf = new Buffer(val, 'utf-8')
            val = buf.toString('hex')
        }else{
            var reg = /^[0-9a-fA-F]+$/;
            if(!reg.test(val)){
                throw "hex format error"
            }
            var buf = Buffer.from(val, 'hex')
            val = buf.toString('utf-8')
        }

        data.hex.result = val
    } catch (error) {
        console.error(error)
        ElMessage({
            type:'error',
            message:'输入格式有误(Hex)'
        })
    }
}


const base32RuleSelect = (code, value, rule)=>{
    var func = null
    if(code === 'encode'){
        func = base32
        value = Buffer.from(value)
    }
    else
        func = base32Decode

    var result = ''
    if(rule === 'Crockford')
        result = func(value,'Crockford')
    else if(rule === 'RFC4648')
        result = func(value,'RFC4648')
    else if(rule === 'RFC4648-HEX')
        result = func(value, 'RFC4648-HEX')
    else
        result = func(value,'RFC3548')

    if(code !== 'encode'){
        const decoder = new TextDecoder('utf-8');
        result = decoder.decode(result)
    }

    return result
}

const base32Handler = ()=>{
    data.base32.result = ''
    var val = data.base32.value
    if(!val){
        ElMessage({
            type:'error',
            message:'待处理值不能为空(Base32)'
        })
        return;
    }

    try {
        val = base32RuleSelect(data.base32.code, val, data.base32.rule)
        data.base32.result = val;
    } catch (error) {
        ElMessage({
            type:'error',
            message:'输入格式错误(Base32)'
        })
        console.error(error)
    }
    
}

const base64Handler = ()=>{
    data.base64.result = ''
    var val = data.base64.value
    if(!val){
        ElMessage({
            type:'error',
            message:'待处理值不能为空(Base64)'
        })
        return;
    }

    try {
        if(data.base64.code === 'encode'){
            var buf = Buffer.from(val, 'utf-8')
            val = buf.toString('base64')
        }else{
            var reg = /^[A-Za-z0-9+/=]*$/;
            if(!reg.test(val)){
                throw "base64 format error"
            }
            var buf = Buffer.from(val, 'base64')
            val = buf.toString('utf-8')
        }

        data.base64.result = val
    } catch (error) {
        console.error(error)
        ElMessage({
            type:'error',
            message:'输入格式有误(base64)'
        })
    }
}

</script>

<template>
    <h2>Base编码</h2>
    <el-divider />
        <el-form label-position="top">
            <h3>Hex(Base16)</h3>
            <el-form-item required label="解码编码">
                <el-radio-group v-model="data.hex.code">
                    <el-radio value="encode">编码</el-radio>
                    <el-radio value="decode">解码</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item required label="待处理值">
                <el-input v-model="data.hex.value" type="textarea" :rows="7" style="width:400px;"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="hexHandler" style="width:100px;height:35px;">启动</el-button>
            </el-form-item>
            <el-form-item label="计算结果" style="display:inline-block;" v-if="data.hex.result">
                <el-row style="width:100%;margin-top:5px;"><el-tag type="success">Hex</el-tag></el-row>
                <el-row style="width:100%;margin-top:10px;">
                    <el-input type="textarea" v-model="data.hex.result" :rows="7" :readonly="true" style="width:400px;"></el-input>
                </el-row>
            </el-form-item>


            <el-divider />
            <h3>Base32</h3>
            <el-form-item required label="解码编码">
                <el-radio-group v-model="data.base32.code">
                    <el-radio value="encode">编码</el-radio>
                    <el-radio value="decode">解码</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item required label="规范">
                <el-radio-group v-model="data.base32.rule">
                    <el-radio value="Crockford">Crockford</el-radio>
                    <el-radio value="RFC4648">RFC4648</el-radio>
                    <el-radio value="RFC4648-HEX">RFC4648-HEX</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item required label="待处理值">
                <el-input v-model="data.base32.value" type="textarea" :rows="7" style="width:400px;"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="base32Handler" style="width:100px;height:35px;">启动</el-button>
            </el-form-item>
            <el-form-item label="计算结果" style="display:inline-block;" v-if="data.base32.result">
                <el-row style="width:100%;margin-top:5px;"><el-tag type="success">Base32</el-tag></el-row>
                <el-row style="width:100%;margin-top:10px;">
                    <el-input type="textarea" v-model="data.base32.result" :rows="7" :readonly="true" style="width:400px;"></el-input>
                </el-row>
            </el-form-item>

            <el-divider />

            <h3>Base64</h3>
            <el-form-item required label="解码编码">
                <el-radio-group v-model="data.base64.code">
                    <el-radio value="encode">编码</el-radio>
                    <el-radio value="decode">解码</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item required label="待处理值">
                <el-input v-model="data.base64.value" type="textarea" :rows="7" style="width:400px;"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="base64Handler" style="width:100px;height:35px;">启动</el-button>
            </el-form-item>
            <el-form-item label="计算结果" style="display:inline-block;" v-if="data.base64.result">
                <el-row style="width:100%;margin-top:5px;"><el-tag type="success">Base64</el-tag></el-row>
                <el-row style="width:100%;margin-top:10px;">
                    <el-input type="textarea" v-model="data.base64.result" :rows="7" :readonly="true" style="width:400px;"></el-input>
                </el-row>
            </el-form-item>
        </el-form>

</template>

<style>

</style>