export default {
  namespace: 'templateKeys',
  state: {
    templateKey: 'userfunmodule',
  },
 
    reducers: {
        Edit(){
            return{
                templateKey:"editmodule"
            }
        },
        UserFun(){
            return{
                templateKey:'userfunmodule',
            }
        }
    }
}
