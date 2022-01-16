class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        # extend the board to two bits - LSB the cur state, MSB the next state
        # states (cur and next)
        # table summarizing the meaning of each 2-bit number in board[i][j]
        # state   |
        #bin   dec| next   cur
        # ----------------------
        # 0 == 00 | dead  dead
        # 1 == 01 | dead  alive
        # 2 == 10 | alive dead
        # 3 == 11 | alive alive  
        for i in range(len(board)):
            for j in range(len(board[0])):
                count = self.check_neighbours(board, i, j)
                if board[i][j] == 1: # alive
                    if count < 2 or count > 3:
                        # live cell dies: 1 -> 01
                        continue
                    else:
                        # alive stays alive: 1 -> 11
                        board[i][j] = 3
                else: # dead
                    if count == 3:
                        # dead becomes alive: 0 -> 10
                        board[i][j] = 2
                        
        # get next state
        for i in range(len(board)):
            for j in range(len(board[0])):
                board[i][j] >>= 1 # shift out the LSB to get MSB (next state)
                
        return board           
                
    def check_neighbours(self, board, y, x):
        count = 0
        for i in range(max(y-1, 0), min(y+2, len(board))):
            for j in range(max(x-1, 0), min(x+2, len(board[0]))):
                if (i,j) == (y,x):
                    continue
                count += board[i][j] & 1 # get LSB (cur state)
                
        return count