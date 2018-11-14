export default {
    namespace: 'custviewKey',
    state: {
        custviewKey:'custviewtemplate',
        selectModuleLeft: 1,
        selectModuleRight: 1,
    },
    reducers: {
        Edit(state){
            const selectModuleLeft=state.selectModuleLeft;
            const selectModuleRight=state.selectModuleRight;
            return{
                custviewKey:"editmodule",
                selectModuleLeft: selectModuleLeft,
                selectModuleRight: selectModuleRight,
            }
        },
        CustViewTem(state){
            const selectModuleLeft=state.selectModuleLeft;
            const selectModuleRight=state.selectModuleRight;
            return{
                custviewKey:'custviewtemplate',
                selectModuleLeft: selectModuleLeft,
                selectModuleRight: selectModuleRight,
            }
        },
        addSelectModuleLeft(state,{payload:e}){
            const count=e+1;
            const selectModuleRight=state.selectModuleRight;
            const custviewKey=state.custviewKey;
            return{            
              selectModuleLeft:count,
              selectModuleRight: selectModuleRight,
              custviewKey:custviewKey,
            }
        },
        addSelectModuleRight(state,{payload:e}){
          const count=e+1;
          const selectModuleLeft=state.selectModuleLeft;
          const custviewKey=state.custviewKey;
          return{
            selectModuleRight:count,
            selectModuleLeft: selectModuleLeft,
            custviewKey:custviewKey,
          }
        },
        deleteSelectModuleLeft(state){
            const moduleLeft = state.selectModuleLeft-1;
            const selectModuleRight=state.selectModuleRight;
            const custviewKey=state.custviewKey;
            return{
                selectModuleLeft:moduleLeft,
                selectModuleRight: selectModuleRight,
                custviewKey:custviewKey,
            }    
        },
        deleteSelectModuleRight(state){
            const moduleRight = state.selectModuleRight-1;
            const selectModuleLeft=state.selectModuleLeft;
            const custviewKey=state.custviewKey;
            return{
                selectModuleRight: moduleRight,
                selectModuleLeft:selectModuleLeft,
                custviewKey:custviewKey,
            }   
        }
    }
  };