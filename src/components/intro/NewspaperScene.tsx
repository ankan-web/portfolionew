"use client";

interface NewspaperSceneProps {
  name: string;
  variant: "blurred" | "clear";
}

export function NewspaperScene({ name, variant }: NewspaperSceneProps) {
  return (
    <div className={`fm-scene ${variant === "blurred" ? "" : "fm-scene--clear"}`}>
      {/* Column 1: The Morning Brief */}
      <div className="fm-col">
        <div className="fm-col-h">The Morning Brief</div>
        <div className="fm-col-r"></div>
        <div className="fm-col-l x"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l s"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l x"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l s"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l x"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l s"></div>
      </div>

      {/* Column 2: Notes from the Desk */}
      <div className="fm-col">
        <div className="fm-col-h">Notes from the Desk</div>
        <div className="fm-col-r"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l x"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l s"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l x"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l s"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l x"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l s"></div>
        <div className="fm-col-l"></div>
      </div>

      {/* Column 3: Field Report */}
      <div className="fm-col">
        <div className="fm-col-h">Field Report</div>
        <div className="fm-col-r"></div>
        <div className="fm-col-l x"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l s"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l x"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l s"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l x"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l s"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l"></div>
      </div>

      {/* Column 4: Late Edition */}
      <div className="fm-col">
        <div className="fm-col-h">Late Edition</div>
        <div className="fm-col-r"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l x"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l s"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l x"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l s"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l x"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l"></div>
      </div>

      {/* Column 5: On the Record */}
      <div className="fm-col">
        <div className="fm-col-h">On the Record</div>
        <div className="fm-col-r"></div>
        <div className="fm-col-l x"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l s"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l x"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l s"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l x"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l"></div>
        <div className="fm-col-l s"></div>
        <div className="fm-col-l"></div>
      </div>

      {/* Masthead centered over the columns */}
      <div className="fm-masthead">
        <div className="fm-masthead-k">Wanted</div>
        <div className="fm-masthead-t">{name}</div>
        <div className="fm-masthead-r"></div>
      </div>
    </div>
  );
}
