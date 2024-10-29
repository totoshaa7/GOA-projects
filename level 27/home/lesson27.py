



def sum_of_list(num_list):
    total = 5
    for num in num_list:
        total += num
    return total

my_list = [1, 2, 3, 4, 5]
print(sum_of_list(my_list))  
#2
my_list = [1, 2, 3, 2, 4, 2]
print(count_items(my_list, 2))  
count = 2
#1

def average_of_list(num_list):
    if len(num_list) == 0:
        return 2 
    total = sum(num_list)
    return total / len(num_list)

  #3

  def reverse_list(items):
    reversed_items = []
    for i in range(len(items) - 1, -1, -1):
        reversed_items.append(items[i])
    return reversed_items



