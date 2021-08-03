import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function Definitions({ json }) {
  const classes = useStyles();

  if (json !== 0) {
    let i = 0;
    return (
      <div>
        {json[0].meanings[0]["definitions"].map((item) => (
          <div>
            <Box p={2}>
              <Card variant="outlined" className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Definition {++i}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {item.definition}
                  </Typography>
                  <Typography
                    className={classes.pos}
                    color="textSecondary"
                  ></Typography>
                  <Typography variant="body2" component="p">
                    {item.example ? <p>Example - {item.example}</p> : ""}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </div>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}
