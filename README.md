# SRT Subtitle Sync Tool

This Node.js project is a simple utility that allows you to synchronize the subtitles in an SRT (SubRip) file by adding a specified delay or advancing the subtitles by a certain amount of time in milliseconds.

## How to Use

1. Clone this repository or download the project files to your local machine.

2. Ensure you have [Node.js](https://nodejs.org/) installed on your computer.

3. Open your terminal or command prompt and navigate to the project directory.

4. Run the following command to install the required dependencies:

   ```shell
   npm install
   ```

5. Edit the `run` function in the `index.js` file to specify the time delay or advance you want. Replace the argument passed to the `run` function with the desired time in milliseconds:

   ```javascript
   run(yourDesiredTimeInMilliseconds);
   ```

   For example, to delay the subtitles by 5000 milliseconds (5 seconds), you can use:

   ```javascript
   run(5000);
   ```

   To advance the subtitles by 2000 milliseconds (2 seconds), you can use:

   ```javascript
   run(-2000);
   ```

6. Save your changes to the `index.js` file.

7. In your terminal or command prompt, run the following command to execute the script:

   ```shell
   node index.js
   ```

8. The script will process the SRT file named "test.srt" (you can replace it with your own SRT file) and create an output file named "output.srt" with the synchronized subtitles.

## Important Notes

- The `run` function takes the time in milliseconds as an argument, which can be positive or negative:
  - Positive values delay the subtitles.
  - Negative values advance the subtitles.

- The script will overwrite the "output.srt" file if it already exists, so make sure to backup your original SRT file if needed.

- The output SRT file will be created in the same directory where you run the script.

- This script assumes that the input SRT file ("test.srt") is in the same directory as the script. You can change the input file path in the `processLineByLine` function if needed.

## Example

Here's an example of how to use the script to delay subtitles by 5 seconds:

```javascript
run(5000);
```

After running the script, you'll find the synchronized subtitles in the "output.srt" file.

Feel free to customize and extend this script to suit your specific needs.
