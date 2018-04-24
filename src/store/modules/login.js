import { loginByUserInfo } from '../../api/login'

const login = {
    state:{
        username:sessionStorage.getItem('USERNAME'),
        role:sessionStorage.getItem('ROLE'),
        introduce:'',
        hello:'一页书',
        newrouter:[]
    },
    mutations:{
        SET_USERNAME:(state,username)=>{
            state.username = username;
        },
        SET_ROLE:(state,role)=>{
            state.role = role ;
        },
        SET_INTRODUCE:(state,introduce)=>{
            state.introduce = introduce ;
        },
        SET_NEWROUTER:(state,newrouter)=>{
            state.newrouter = newrouter ;
        },
        KILL:(state,haha)=>{
            state.hello =haha;
        }
    },
    actions:{
        LoginsTom({ commit },info){
            return new Promise((resolve,reject)=>{
                let data = {} ;
                loginByUserInfo.map(function(item){ //获取所有用户信息
                   // item.pew = item.pew.toString();
                   console.log(info.username == item.username || info.pew == item.pew)
                    if( info.username == item.username || info.pew == item.pew ){
                        console.log(item.username)
                        commit('SET_USERNAME',item.username);  //将username和role进行存储
                        sessionStorage.setItem('USERNAME',item.username);
                        commit('SET_ROLE',item.role);
                        commit('KILL','我是谁')
                        sessionStorage.setItem('ROLE',item.role);
                        return data = { username:item.username,introduce:item.intriduce };
                    }else{
                        return data;
                    }
                });
                resolve(data);
            }).catch(error=>{
                reject(error)
            })
        }
    }
}


export default login;











