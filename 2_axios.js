const axios = require('axios')
const link = 'https://jsonplaceholder.typicode.com'
let join = []
const post =  () => {
     axios.get(`${link}/posts`)
        .then((res) => {
            console.log(res)
            return res
        })
        .catch((err) => {
            console.log(err);
            return err
        })
}

let combine = () => {
  axios.get(`${link}/posts`).then(result => {
    join = result;
    result.forEach((item, index) => {
      axios.get(`${link}/users`.concat(item.id.toString()))
          .then(gabung => {
              join[index].gabung = gabung;
          });
    });
  });
}

 console.log(combine());

const users =  () => {
     axios.get(`${link}/users`)
        .then((res) => {
            console.log(res)
            return res
        })
        .catch((err) => {
            console.log(err);
            return err
        })
}
// console.log(users());


const allData =  () => {
    let dataPost = post()
    let dataUser = users()
    let allData =[]
    
    dataPost.map((item) => {
        data = item
        let user = dataUser.find((items) => {
            return item.id = items.id
        })
        data.user = user
        allData.push(data)
    })
}



