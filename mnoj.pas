var
    n,i:integer;
    a:array [0..5] of integer;
begin
    n:=5;
    for i:=0 to n do a[i]:=0;
    a[n]:=1;
    while a[0]=0 do
    begin
        write('{');
        for i:=1 to n do
            if a[i]=1 then
                write(' ',i-1);
        write('}');
        writeLn('');
        i:=n;
        while a[i]=1 do
        begin
            a[i]:=0;
            dec(i);
        end;
        inc(a[i]);
    end;
end.