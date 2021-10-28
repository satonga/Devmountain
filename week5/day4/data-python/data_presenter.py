# Python Lab

open_file = open("CupcakeInvoices.csv")

total_arr = []
final = 0

for row in open_file:
  row = row.rstrip('\n').split(',')
  print(row[2])
  
  total = round(float(row[4]) * float(row[3]), 2)
  print(total)
  
  total_arr.append(total)

open_file.close()

for item in range(0, len(total_arr)):
  final = final + total_arr[item]

print(round(final, 2))