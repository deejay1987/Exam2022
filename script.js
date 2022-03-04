/**
 * DOCU: This will handle the differents sizes of screen <br>
 * Triggered by: intl_load_oh_dates(stack_id) <br>
 * Last updated at: March 4, 2022
 * @author Denver
 */

function intl_load_oh_dates(stack_id){
    let stack_name = "";
    let location_name = $("#international_location").text();
    let stack_names = ["ios", "mean", "lamp", "python", "ruby", "net", "java"];
    
    if(location_name !== "" && stack_id != undefined){
        if(stack_id <= stack_names.length - 1){
            stack_name = stack_names[stack_id - 1];
        }
    }
    add_cohort_dates("Dev_" + location_name + "_" + stack_name);
}