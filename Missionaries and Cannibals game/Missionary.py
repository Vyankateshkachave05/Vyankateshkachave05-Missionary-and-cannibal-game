### Your code ###
boat_side = 'right'
missionaries_on_right = 3
cannibals_on_right = 3
missionaries_on_left = 0
cannibals_on_left = 0
print('\U0001f482'* missionaries_on_left , '\U0001f479'*cannibals_on_left , '\U0001f30a'*4 + '\U0001f6A2' ,'\U0001f482'*missionaries_on_right ,'\U0001f479'*cannibals_on_right)
while True:


    missionaries = int(input('\U0001f482'))
    cannibals= int(input('\U0001f479'))


    if missionaries + cannibals <1 or missionaries + cannibals > 2:
      print('inValid')
      continue
    else:
      print('valid ')

      if boat_side == 'right':
        if missionaries > missionaries_on_right or cannibals > cannibals_on_right :
          print('invaild ')
          continue
        else:
          boat_side =  'left'
          missionaries_on_right = missionaries_on_right- missionaries
          cannibals_on_right = cannibals_on_right - cannibals
          missionaries_on_left = missionaries_on_left + missionaries
          cannibals_on_left = cannibals_on_left + cannibals
          print('\U0001f482'* missionaries_on_left , '\U0001f479'*cannibals_on_left,'\U0001f30a'*4 + '\U0001f6A2' , '\U0001f482'*missionaries_on_right ,'\U0001f479'*cannibals_on_right)

      elif boat_side == 'left':
        if missionaries > missionaries_on_left or cannibals > cannibals_on_left :
         print('invaild')
         continue
        else:
         boat_side =  'right'
         missionaries_on_right = missionaries_on_right + missionaries
         cannibals_on_right = cannibals_on_right + cannibals
         missionaries_on_left = missionaries_on_left - missionaries
         cannibals_on_left = cannibals_on_left - cannibals
         print('\U0001f482'* missionaries_on_left ,  '\U0001f479'*cannibals_on_left ,'\U0001f6A2'+ '\U0001f30a'*4 , '\U0001f482'*missionaries_on_right , '\U0001f479'*cannibals_on_right)
      if missionaries_on_right < cannibals_on_right and missionaries_on_right>0:
        print('YOU LOSE')
        break
      elif missionaries_on_left < cannibals_on_left and missionaries_on_left>0:
        print('YOU LOSE')
        break
      if missionaries_on_left ==3  and cannibals_on_left == 3:
        print('YOU WIN')
        break
