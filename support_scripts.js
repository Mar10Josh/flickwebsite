function msgsent(name, msg) {
   emailjs.send("gmail_flick", "support_flick", {
       spmn: name,
       spmm: msg
   })
}