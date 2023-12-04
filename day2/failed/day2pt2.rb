games = []
text = File.open(File.join(File.dirname(__FILE__), 'input.txt'), 'r+');
text.each_line {|line| games << line.split("\n") }

games.each_line{|line| puts line}