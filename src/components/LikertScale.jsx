import { Box, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// A custom component that renders a Likert scale
function LikertScale(props) {
  const { question, options, onChange } = props;

  return (
    <Box
      sx={{ backgroundColor: "#f2f2f2", p: "1em", borderRadius: "0.5em" }}
      className="likert-scale"
    >
      <Box className="likert-options">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">{question}</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            {options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={index}
                control={<Radio />}
                label={option}
                onChange={onChange}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
}

export default LikertScale;
