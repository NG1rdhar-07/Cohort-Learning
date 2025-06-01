function addTodo()
        {
            const input = document.querySelector("input");
            const val = input.value;
            console.log(val);
        }

let ct = 10;

        function callback()
        {
            let el = document.querySelectorAll("h2")[0].innerHTML = ct;
            console.log(ct);
            ct = ct + 1;
        }

setInterval(callback, 1000);
