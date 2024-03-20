var common_array = [1, "maadeha", true, "harry", 120, false, "It is a ball"];
// let filter_array = common_array.filter(item => typeof item === "string");
// console.log(filter_array);
function filter_aray() {
    common_array.forEach(function (item) {
        if (typeof item === "string") {
            console.log(item);
        }
    });
}
filter_aray();
