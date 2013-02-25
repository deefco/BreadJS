bread = new Bread("Wheat");
span = document.getElementById('header');
span.innerHTML = span.innerHTML + "<pre>" + bread.bake() + "</pre>";
