checkIn = 30112022
checkOut = 5122022
roomN = 2

checkCount = [[30112022,5],[1122022,5],[2122022,5],[3122022,5],[4122022,5],[5122022,5],[6122022,5],[7122022,5]]

Checking = False

isFree = False

for i in checkCount:
    if checkIn == i[0]:
        # print("start: " , i[0])
        if(i[1] >= roomN):
            isFree = True
        else:
            isFree = False
            break
        Checking = True
    elif(checkOut == i[0]):
        # print("end: " , i[0])
        if(i[1] >= roomN):
            isFree = True
            break
        else:
            isFree = False
            break
    elif (Checking == True):
        # print("Check: " , i[0])
        if(i[1] >= roomN):
            isFree = True
        else:
            isFree = False
            break
print(isFree)

