page <id> "<name>"
{
    PageType = List;
    ApplicationArea = All;
    UsageCategory = Administration;
    SourceTable = TableName;
    
    layout
    {
        area(Content)
        {
            repeater(General)
            {
                field(Name; NameSource)
                {
                    ApplicationArea = All;
                    
                }
            }
        }
    }
    
    actions
    {
        area(Processing)
        {
        }
    }
    
    var
        myInt: Integer;
}