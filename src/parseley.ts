//    Copyright 2016 underdolphin(masato sueda)
// 
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
// 
//        http://www.apache.org/licenses/LICENSE-2.0
// 
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

export class Parseley {
    public success = false;
    public result?: string[] = [''];
    public newPosition = 0;
    public targetString = '';

    /**
     * Parse function
     */
    public parse(str: string, pos: number) {
        const parseley = this;
        parseley.success = (str === '') ? false : true;
        parseley.result = null;
        parseley.newPosition = 0;
        parseley.targetString = str;
        return parseley;
    }

    /**
     * Function to generate parser for simple string
     */
    public token(token: string) {
        const parseley = this;
        if (token.length === 0) {
            parseley.success = false;
            parseley.result = null;
            parseley.newPosition = 0;
            return parseley;
        }

        if (parseley.targetString.substr(parseley.newPosition, token.length) === token) {
            parseley.success = true;
            if (parseley.result === null) {
                parseley.result = [token];
            } else {
                parseley.result.push(token);
            }
            parseley.newPosition += token.length;
            return parseley;
        } else {
            console.log(parseley.success);
            parseley.success = false;
            parseley.result = null;
            parseley.newPosition = 0;
            return parseley;
        }
    }
}