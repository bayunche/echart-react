// 引入react组件以及echarts组件
import * as echart from "echarts"
import React ,{useEffect,useRef} from "react"
// 图表
const echartsExample=()=>{
    const lineRef =useRef<any>(null)
    const myChartRef=  useRef<any>(null)
    useEffect(()=>{
        initChart()
    },[])

    // 初始化
    const initChart=()=>{
     myChartRef.current=echart.init(lineRef.current)
     let option:any={
      xAxis:{
       type:"category",
       data:["Mon","Tue","Wed","Tus","Fri","Sat","Sun"]
      },
      yAxis:{
        type:"value"
      },

     }
    }
}
