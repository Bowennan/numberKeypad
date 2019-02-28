<template>
  <div class="num-container">
    <span :style="{height: keyHeight + 'px', lineHeight: keyHeight + 'px', fontSize: fontSize + 'px', color: colorValue, borderRadius: RadiusNum + 'px', width: computedNum, marginBottom: marginBottomValue + 'px'}" class="num-style" v-for="(item, index) in numContents" :key="'key' + index" @click="inputnumber(item)">
       {{item}}
    </span>
    <span :style="{height: keyHeight + 'px', lineHeight: keyHeight + 'px', fontSize: fontSize + 'px', color: colorValue, borderRadius: RadiusNum + 'px', width: computedNum, marginBottom: marginBottomValue + 'px'}" class="num-style" @click="actionKeyFun(actionp)">{{actionp}}</span>
    <span :style="{height: keyHeight + 'px', lineHeight: keyHeight + 'px', fontSize: fontSize + 'px', color: colorValue, borderRadius: RadiusNum + 'px', width: computedNum, marginBottom: marginBottomValue + 'px'}" class="num-style" @click="delnumber">{{action}}</span>

    <!-- <div style="width: 100%; height: 50px; margin-top: 20px;">{{numberString}}</div> -->
  </div>
</template>

<script>
export default {
    props: {
     actionp: {
       type: String,
       default: '.'
     },
     action: {
       type: String,
       default: "删除"
     },
     keyHeight: {
       type: String,
       default: '48'
     },
     fontSize: {
       type: String,
       default: '18'
     },
     colorValue: {
       type: String,
       default: '#444444'
     },
     RadiusNum: {
       type: String,
       default: '2'
     },
     marginHorizontal: {
       type: Number,
       default: 6
     },
     outterWrapperWidth: {
       type: Number,
       default: 330
     },
     marginBottomValue: {
       type: String,
       default: '8'
     }
    },
    computed: {
      computedNum() {
        let width = (this.outterWrapperWidth - 3 * this.marginHorizontal) / 3
        return width + 'px'
      }
    },
    data () {
        return {
          numContents: [
           '7','8','9','4','5','6','1','2','3','0'
          ],
          inputnumberArr: [],
          numberString: '',
        }
    },
    components: {
    },
    methods: {
        inputnumber(value) {
          this.inputnumberArr.push(value)
          // console.log(this.inputnumberArr)
          this.numberString = this.inputnumberArr.join('')
          this.$emit("outputNumber", this.numberString)
        },

        actionKeyFun(value) {
          if(value == '.') {
            if(this.numberString.indexOf('.') != -1) {
              return
            }
            this.inputnumberArr.push(value)
            // console.log(this.inputnumberArr)
            this.numberString = this.inputnumberArr.join('')
            this.$emit("outputNumber", this.numberString)
          }else {
            this.inputnumberArr.pop()
            // console.log(this.inputnumberArr)
            this.numberString = this.inputnumberArr.join('')
            this.$emit("outputNumber", this.numberString)
          }
        },

        delnumber() {
          if(this.action == "清空") {
            this.inputnumberArr = []
            this.$emit('clearNum')
          }else {
            this.inputnumberArr.pop()
            // console.log(this.inputnumberArr)
            this.numberString = this.inputnumberArr.join('')
            this.$emit("outputNumber", this.numberString)
          }
        }
    }
}
</script>

<style scoped>
 .num-container {
   width: 100%;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
 }
 .num-style {
   display: inline-block;
   border: 1px solid #D9E4FF;
   text-align: center;
   user-select: none;
 }
</style>