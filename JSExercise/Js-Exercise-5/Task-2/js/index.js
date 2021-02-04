let input_string = document.getElementById("input_string")
let string = document.getElementById("string")

let User_array = [
    {

        User_name: 'Ashish Shah'
    },
    {

        User_name: 'Rashmin Chhatrala'
    },
    {

        User_name: 'Yash Dubey'
    },
    {

        User_name: 'Prakash Jain'
    },
    {
        User_name: 'Yashraj Singh'
    },
    {
        User_name: 'Viraj Sinha'
    },
    {
        User_name: 'Rajesh Kumar'
    },
    {
        User_name: 'Mahesh Marwadi'
    },
    {
        User_name: 'Suresh Sahni'
    },
    {

        User_name: 'Amar Vilas'
    },
    {
        User_name: 'Virdas Singhania'
    },
    {
        User_name: 'Rajeshwari Bindra'
    },
    {
        User_name: 'Birendra Bhalerao'
    },
    {
        User_name: 'Virendra Bhupati'
    },
    {

        User_name: 'Bhupendra Singh'
    },
    {

        User_name: 'Bhuvam Bam'
    },
    {
        User_name: 'Shri Raj'
    },
    {
        User_name: 'Prashant Kamle'
    },
    {
        User_name: 'Kamlesh Tomar'
    },
    {
        User_name: 'Risabh Khare'
    },
    {

        User_name: 'Rishi Kohli'
    },
];
let search = () => {
    string.innerHTML = ''
    let User_array_two = []
    for (user of User_array) {
        if (user.User_name.includes(input_string.value)) {
            User_array_two.push(user.User_name)
        }
    }
    string.innerHTML = ''
    User_array_two.forEach(User_name => {
        
        let input_pos = User_name.indexOf(input_string.value)
        let name_one = User_name.slice(0,input_pos)
        let name_two=User_name.slice(input_pos ,input_pos+input_string.value.length)
        let name_three=User_name.slice(input_pos+input_string.value.length, User_name.length)
        if (input_string.value !== '') {
            string.innerHTML += `${name_one}<mark>${name_two}</mark>${name_three}<br>`
        }
        else {
            string.innerHTML = ''
        }
    })

}