#opening um-server file
log_file = open("um-server-01.txt")

#function sales_reports
def sales_reports(log_file):
    for line in log_file: # For loop through um-server text
        line = line.rstrip() # Removes white space
        day = line[0:3] # setting variable = to day
        if day == "Mon": # conditional for if "Tue" is hit(Now "Mon")
            print(line) # printing the line that has "Tue"(Now "Mon")


sales_reports(log_file) # Calling Function
